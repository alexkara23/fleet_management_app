import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['75f1200347f0729092dc8c0fe16d43f4'],
    table: 'sys_app_module',
    data: {
        active: true,
        application: 'f5f1200347f0729092dc8c0fe16d43ef',
        link_type: 'LIST',
        mobile_title: 'Fleet Management Tasks',
        mobile_view_name: 'Mobile',
        name: 'x_snc_fleet_manage_fleet_management_task',
        override_menu_roles: false,
        require_confirmation: true,
        roles: 'x_snc_fleet_manage.fleet_management_task_user' as any,
        sys_domain: 'global',
        sys_domain_path: '/',
        title: 'Fleet Management Tasks',
        uncancelable: false,
    },
})
