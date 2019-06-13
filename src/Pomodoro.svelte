<script>
    import Border from './Border.svelte';
    import { createEventDispatcher } from 'svelte';
    import { onMount } from 'svelte';

    import { PomodoroManager, States } from './Pomodoro.js'

    const dispatch = createEventDispatcher();

    export let workDayStart = "9:00";
    export let workDayEnd = "17:00";
    export let lunchBreakStart = "11:30";
    export let lunchDuration = 30;
    export let workIntervalDuration = 25;
    export let shortBreakDuration = 5;
    export let style = "";

    onMount(() => {
        const timer = setInterval(() => {
            if (tillNextStatus == 0) {
                let nextStatusResponse = manager.getNextState(currentStatus);
                currentStatus = nextStatusResponse.name;
                tillNextStatus = nextStatusResponse.duration;
            } else {
                tillNextStatus = tillNextStatus - 1;
            }
        }, 60 * 1000);

        return () => clearInterval(timer);
    });

    let manager = new PomodoroManager({
        workCycle: workIntervalDuration,
        breakCycle: shortBreakDuration
    });

    let currentStatus = 'Get ready';
    let tillNextStatus = 0;

</script>

<style>
   h1 {
       margin: 0;
       text-align: center;
   }
   
   p {
       margin: 0;
       text-align: center;
   }
</style>

<Border text="🍅 Pomodoro" style="{style}">
    <h1>{currentStatus}</h1>
    <p>{tillNextStatus} minutes to go</p>
</Border>