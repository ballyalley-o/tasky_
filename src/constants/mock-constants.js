const INITIAL_STATE = {
  tasks: [
    { id: 1, task: 'Build App1', totalTime: 10 },
    { id: 2, task: 'Build App2', totalTime: 60 },
    { id: 3, task: 'Build App3', totalTime: 1000 },
    { id: 4, task: 'Build App4', totalTime: 10000 },
    { id: 5, task: 'Build App5', totalTime: 100000 },
  ],
  activeTask: null,
  timer: {
    active: false,
    time: 10,
    unit: 'seconds',
    display: '',
  },
}

module.exports = INITIAL_STATE
