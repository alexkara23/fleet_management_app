import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['16648d4347b4729092dc8c0fe16d4362'],
    name: 'High Priority if VIP',
    table: 'x_snc_fleet_manage_fleet_management_task',
    when: 'before',
    action: ['insert'],
    filterCondition: 'opened_by.vip=true^EQ',
    script: `(function executeRule(current, previous /*null when async*/) {
    //Feature A changes
	current.priority = 2;
	current.work_notes = "Caller is VIP - setting high priority for the task";

})(current, previous);`,
})
