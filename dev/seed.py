"""Seed the dedicated local Docker database. Existing accounts are preserved."""
from CTFd import create_app
from CTFd.constants.setup import DEFAULTS
from CTFd.models import db, Users, Challenges, Flags, Hints, Pages
from CTFd.utils import set_config

app = create_app()
with app.app_context():
    for key, value in DEFAULTS.items():
        set_config(key, value)
    for key, value in {
        "setup": True, "ctf_name": "Challenge Express", "user_mode": "users",
        "ctf_theme": "challenge-express", "theme_settings": "{}",
        "challenge_ratings": "disabled", "view_self_submissions": True,
    }.items():
        set_config(key, value)
    for name, email, password, kind in [
        ("admin", "admin@example.test", "express-admin-local", "admin"),
        ("player", "player@example.test", "express-player-local", "user"),
    ]:
        if not Users.query.filter_by(name=name).first():
            db.session.add(Users(name=name, email=email, password=password, type=kind, verified=True))
    samples = [
        ("Welcome to your inbox", "Getting Started", 50, "Your first message has arrived. Reply with `flag{youve_got_mail}` to complete this challenge.", "flag{youve_got_mail}"),
        ("Read between the tags", "Web", 100, "The answer is hiding in this message's HTML.\n\n<!-- flag{read_between_the_tags} -->", "flag{read_between_the_tags}"),
        ("A small rotation", "Cryptography", 150, "Decode this ROT13 message: `synt{ebgngr_gur_yrggref}`", "flag{rotate_the_letters}"),
    ]
    for name, category, value, description, flag in samples:
        if Challenges.query.filter_by(name=name).first():
            continue
        challenge = Challenges(name=name, category=category, value=value, description=description, type="standard", state="visible", max_attempts=0)
        db.session.add(challenge)
        db.session.flush()
        db.session.add(Flags(challenge_id=challenge.id, type="static", content=flag, data=""))
        db.session.add(Hints(challenge_id=challenge.id, content="Look closely at the message above. The challenge description contains everything you need.", cost=0))
    if not Pages.query.filter_by(route="index").first():
        db.session.add(Pages(route="index", title="Welcome", content='<h1>Challenge Express</h1><p>Your challenges are waiting.</p><p><a href="/challenges">Open All Challenges</a></p>', draft=False))
    db.session.commit()
    print("Local fixture ready. Admin: admin / express-admin-local. Player: player / express-player-local.")
