import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['3ac42c0747f0729092dc8c0fe16d4302'],
    table: 'sys_dictionary_override',
    data: {
        attributes_override: 'false',
        base_table: 'task',
        calculation_override: 'false',
        default_value_override: 'false',
        dependent_override: 'false',
        display_override: 'false',
        element: 'cmdb_ci',
        mandatory: 'false',
        mandatory_override: 'false',
        name: 'x_snc_fleet_manage_fleet_management_task',
        read_only: 'false',
        read_only_override: 'false',
        reference_qual: 'sys_class_name=cmdb_ci_vehicle',
        reference_qual_override: 'true',
    },
})
