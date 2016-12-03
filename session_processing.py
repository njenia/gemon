from data_facade import players_data


class SessionData(object):
    def __init__(self):
        self.numberOfCrash = 0
        self.avgStepTime = [0] * 7
        self.stepVisits = [0] * 7
        self.date = ''
        self.zone = -1
        self.speed = -1
        self.time = -1

    def setDate(self,date):
        self.date = date
    def setZone(self,zone):
        self.zone = zone
    def setTime(self,time):
        self.time = time
    def setSpeed(self,speed):
        self.speed = speed
    def addStep(self,step):
        self.stepVisits[int(step)-1] += 1

	def __repr__(self):
   		return "jgj"
	def __str__(self):
   		return "jgj"


endGameString = ['Completed', 'reset', 'Interuppted']


def get_session_data(playerID):
    sessions = []
    for session in players_data:
        player_id = session.get('player_id')
        if player_id == playerID:
            extracted_session_data = SessionData()
            session_lines = session['content'].split('\r\n')
            splitted_second_line = session_lines[1].split(' ')
            extracted_session_data.setDate(splitted_second_line[2] + '-' + splitted_second_line[1])
            session_len = len(session_lines)
            lastStep = -1
            line_num = 0
            while line_num < session_len - 1:
                line_num += 1
                session_line = session_lines[line_num]
                while not any(s in session_line for s in endGameString) and session_line !='':  #iterating over all lines until a session end
                    if 'zone' in session_line.lower():                            #set session Zone
                        extracted_session_data.setZone(session_line.split(' ')[-1].split(':')[-1].strip())
                    elif 'speed' in session_line.lower():                         #set session Speed
                        extracted_session_data.setSpeed(session_line.split(' ')[-1].split(':')[-1].strip())
                    elif 'time' in session_line.lower():                          #set session Time
                        extracted_session_data.setTime(session_line.split(' ')[-1].split(':')[-1].strip())
                    elif 'resumed' not in session_line and 'crash' not in session_line:
                        if lastStep == -1:
                            lastStep = int(session_line.split(' ')[-1].strip())
                        else:
                            step = int(session_line.split(' ')[-1].strip())
                            if step != lastStep:
                                extracted_session_data.addStep(step)
                                lastStep = step
                    line_num += 1
                    session_line = session_lines[line_num]
                sessions.append(extracted_session_data)
                if session_line != '':
                    extracted_session_data = SessionData()
                    splitted_date_line = session_line.split(' ')
                    extracted_session_data.setDate(splitted_date_line[2] + '-' + splitted_date_line[1])
                    lastStep = -1
    playedSession = []
    for session in sessions:
        if any(session.stepVisits):
            playedSession.append(session)

    return playedSession
