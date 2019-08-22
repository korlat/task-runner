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
});


/*
describe('The pizza CLI', () => {
    it('should print the correct output', async () => {
        const response = await cmd.create('dist/cli.js').execute(
            ['18:40'],[
                'y',
                cmd.ENTER,
                '555-1234123',
                cmd.ENTER,
                'Large',
                cmd.ENTER,
                '1',
                cmd.ENTER,
                'p',
                cmd.ENTER,
                '2',
                cmd.ENTER,
                'My Comment',
                cmd.ENTER,
            ]
        );
        expect(response).to.equal(
            'you ordered a pizza with:\n  - peppers\n  - gouda cheese'
        );
    });
});*/

/*
describe("getDeploymentRegionAndEnv()", function() {
    function generateDeploymentWithApps(...affectedApps) {
        return { affectedApps };
    }

    it("should use only first app for detection", function() {
        let deployment = generateDeploymentWithApps("/tst/newton/idm-ui", "/uat/ceres/idm-ui");
        expect(getDeploymentRegionAndEnv(deployment)).to.equal("/tst/newton");
    });

    it("should ignore the empty deployment", function() {
        let deployment = generateDeploymentWithApps();
        expect(getDeploymentRegionAndEnv(deployment)).to.equal("");
    });

    it("should ignore no deployment given", function() {
        expect(getDeploymentRegionAndEnv(undefined)).to.equal("");
    });

    it("should ignore the empty objects", function() {
        expect(getDeploymentRegionAndEnv({})).to.equal("");
    });

    it("should detect region, env and app in the ID", function() {
        let deployment = generateDeploymentWithApps("/tst/newton/idm-ui");
        expect(getDeploymentRegionAndEnv(deployment)).to.equal("/tst/newton");
    });

    it("should detect region, env and app in the ID with trailing slash", function() {
        let deployment = generateDeploymentWithApps("/tst/newton/idm-ui/");
        expect(getDeploymentRegionAndEnv(deployment)).to.equal("/tst/newton");
    });

    it("should detect region and env in the ID", function() {
        let deployment = generateDeploymentWithApps("/ops/chat");
        expect(getDeploymentRegionAndEnv(deployment)).to.equal("/ops");
    });

    it("should detect region and env in the ID with trailing slash", function() {
        let deployment = generateDeploymentWithApps("/ops/chat/");
        expect(getDeploymentRegionAndEnv(deployment)).to.equal("/ops");
    });

    it("should detect only region in the ID", function() {
        let deployment = generateDeploymentWithApps("/tst");
        expect(getDeploymentRegionAndEnv(deployment)).to.equal("/tst");
    });

    it("should detect only region in the ID with trailing slash", function() {
        let deployment = generateDeploymentWithApps("/tst/");
        expect(getDeploymentRegionAndEnv(deployment)).to.equal("/tst");
    });
});*/
