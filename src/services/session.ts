import { SessionTest } from "../models/sessionTest";

export class SessionService {
	private sessions: SessionTest[] = [];

	addSession(subcategory: string) {
		this.sessions.push(new SessionTest(subcategory));
		console.log(this.sessions);
	}

	addSessions(sessions: SessionTest[]) {
		this.sessions.push(...sessions);
	}

	getSessions() {
		return this.sessions.slice();
	}

	removeSession(index: number) {
		this.sessions.splice(index, 1);
	}
}