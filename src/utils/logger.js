const LOG_LEVELS = {
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR'
};

const log = (level, message, data = null) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${level}] ${message}`;
  
  if (data) {
    console.log(logMessage, data);
  } else {
    console.log(logMessage);
  }

  // Em um app real, aqui enviaríamos para um serviço de telemetria
};

export const logger = {
  info: (msg, data) => log(LOG_LEVELS.INFO, msg, data),
  warn: (msg, data) => log(LOG_LEVELS.WARN, msg, data),
  error: (msg, data) => log(LOG_LEVELS.ERROR, msg, data)
};
