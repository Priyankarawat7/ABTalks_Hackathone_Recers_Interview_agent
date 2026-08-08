// In-Memory Storage
const SESSIONS = new Map();

const SessionService = {
  get: (id) => SESSIONS.get(id),
  set: (id, session) => SESSIONS.set(id, session),
  has: (id) => SESSIONS.has(id),
};

module.exports = SessionService;