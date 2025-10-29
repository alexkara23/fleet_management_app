import { Table, StringColumn } from '@servicenow/sdk/core'

export const x_snc_fleet_manage_fleet_management_task = Table({
    actions: ['read', 'update', 'delete', 'create'],
    allowWebServiceAccess: true,
    audit: true,
    autoNumber: {
        prefix: 'FLT',
    },
    extends: 'task',
    label: 'Fleet Management Task',
    name: 'x_snc_fleet_manage_fleet_management_task',
    schema: {
        task_type: StringColumn({
            default: '1',
            choices: {
                1: {
                    label: 'General Query',
                    sequence: 0,
                },
                2: {
                    label: 'Maintenance',
                    sequence: 1,
                },
                3: {
                    label: 'Rellocation',
                    sequence: 2,
                },
            },
            dropdown: 'dropdown_with_none',
            label: [
                {
                    label: 'Task Type',
                    language: 'en',
                },
            ],
        }),
    },
})
