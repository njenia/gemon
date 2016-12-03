import os

from flask import Flask, jsonify

from session_processing import get_session_data

app = Flask(__name__)


# app.config.update(DEBUG=True)



@app.route('/')
def root():
    return app.send_static_file('index.html')


@app.route('/static/<path>')
def static_content(path):
    return app.send_static_file(path)


@app.route('/data/<player_id>')
def data(player_id):
    played_sessions = get_session_data(player_id)
    return jsonify([{'date': session.date, 'stepVisits': session.stepVisits} for session in played_sessions])


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
