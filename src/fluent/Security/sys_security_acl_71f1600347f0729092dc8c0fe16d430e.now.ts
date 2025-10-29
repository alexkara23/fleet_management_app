import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['71f1600347f0729092dc8c0fe16d430e'],
    description: 'Default access control on x_snc_fleet_manage_fleet_management_task',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'create',
    roles: ['x_snc_fleet_manage.fleet_management_task_user'],
    table: 'x_snc_fleet_manage_fleet_management_task',
})
