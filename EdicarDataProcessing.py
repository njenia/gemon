import numpy as np
from os import listdir
from os.path import isfile, join

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


def get_session_data(playerID): 
    mypath = 'data'
    onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]
    onlyfiles.sort()
    endGameString = ['Completed', 'reset','Interuppted', ]
    sessions = []
    for fileName in onlyfiles:
        player = ('player_ID_%s'%(playerID))
        if player in fileName:
            f = open("%s/%s" % (mypath, fileName),'r')
            session = SessionData()
            line = f.readline()
            line = f.readline()
            data = line.split(' ')
            session.setDate(data[2] + '-' + data[1])
            lastStep = -1
            while line !='':
                while not any(s in line for s in endGameString) and line !='':  #iterating over all lines until a session end
                    if 'zone' in line.lower():                            #set session Zone
                        session.setZone(line.split(' ')[-1].split(':')[-1].strip())
                    elif 'speed' in line.lower():                         #set session Speed
                        session.setSpeed(line.split(' ')[-1].split(':')[-1].strip())
                    elif 'time' in line.lower():                          #set session Time
                        session.setTime(line.split(' ')[-1].split(':')[-1].strip())
                    elif 'resumed' not in line and 'crash' not in line:
                        if lastStep==-1:
                            lastStep = int(line.split(' ')[-1].strip())
                        else:
                            step = int(line.split(' ')[-1].strip())
                            if step != lastStep:
                                session.addStep(step)
                                lastStep = step
                    line = f.readline()
                sessions.append(session)
                if line != '':
                    session = SessionData()
                    data = line.split(' ')
                    session.setDate(data[2] + '-' + data[1] )
                    lastStep = -1
                    line = f.readline()
    playedSession = []
    for session in sessions:
        if any(session.stepVisits):
            playedSession.append(session)

    return playedSession
