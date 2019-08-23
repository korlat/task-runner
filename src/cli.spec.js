import { expect } from "chai";
import cmd from "./util/test-helper"


describe('The cron planner CLI', () => {
    it('should output value for 1st config', async () => {

        let response = await cmd.create('dist/cli.js').execute(
            ['16:10'],['30 1 /bin/run_me_daily']
        );

        expect(response).to.equal("1:30 tomorrow - /bin/run_me_daily\n");
    });

    it('should output value for 2st config', async () => {

        let response = await cmd.create('dist/cli.js').execute(
            ['16:10'],['45 * /bin/run_me_hourly']
        );

        expect(response).to.equal("16:45 today - /bin/run_me_hourly\n");
    });

    it('should output value for 3rd config', async () => {

        let response = await cmd.create('dist/cli.js').execute(
            ['16:10'],['* * /bin/run_me_every_minute']
        );

        expect(response).to.equal("16:10 today - /bin/run_me_every_minute\n");
    });

    it('should output value for 4th config', async () => {

        let response = await cmd.create('dist/cli.js').execute(
            ['16:10'],['* 19 /bin/run_me_sixty_times']
        );

        expect(response).to.equal('19:00 today - /bin/run_me_sixty_times\n');
    });

    it('should output value when trailing whitespaces are added', async () => {

        let response = await cmd.create('dist/cli.js').execute(
            ['16:10'],['* 19 /bin/run_me_sixty_times    ']
        );

        expect(response).to.equal('19:00 today - /bin/run_me_sixty_times\n');
    });

    it('should output value when tabbed spacing is used', async () => {

        let response = await cmd.create('dist/cli.js').execute(
            ['16:10'],['*\t19\t/bin/run_me_sixty_times   ']
        );

        expect(response).to.equal('19:00 today - /bin/run_me_sixty_times\n');
    });
});
