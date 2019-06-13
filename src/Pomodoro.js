'use strict'

export const States = {
    work: '🔨 Work',
    break: '☕ Break',
    longBreak: '🍕 Long break'
};

export class PomodoroManager {
    constructor(options) {
        this.workCycle = options.workCycle || 25;
        this.breakCycle = options.breakCycle || 5;
        this.longBreakCycle = options.longBreakCycle || 30;
        this.longBreakCount = 1;
    }

    getNextState(currentState) {
        switch (currentState) {
            case States.work:
                if (this.longBreakCount % 4 === 0) {
                    return {
                        name: States.longBreak,
                        duration: this.longBreakCycle
                    };
                } else {
                    this.longBreakCount++;
                    return {
                        name: States.break,
                        duration: this.breakCycle
                    };
                }
                break;
            default :
                return {
                    name: States.work,
                    duration: this.workCycle
                };
                break;
        }
    }
}