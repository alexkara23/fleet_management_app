import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['60672c0b47f0729092dc8c0fe16d4326'],
    table: 'catalog_ui_policy',
    data: {
        active: 'true',
        applies_catalog: 'true',
        applies_req_item: 'true',
        applies_sc_task: 'true',
        applies_target_record: 'true',
        applies_to: 'item',
        catalog_conditions: 'IO:6517600b47f0729092dc8c0fe16d4374=Yes^EQ',
        catalog_item: 'f206e88747f0729092dc8c0fe16d4313',
        global: 'true',
        inherit: 'false',
        isolate_script: 'true',
        on_load: 'true',
        order: '100',
        reverse_if_false: 'true',
        run_scripts: 'false',
        script_false: 'function onCondition() {}',
        script_true: 'function onCondition() {}',
        short_description:
            "Make 'add_a_photo_of_the_damage' mandatory & visible depending on 'is_this_related_to_a_damage'",
        sys_domain: 'global',
        sys_domain_path: '/',
        ui_type: '0',
        va_supported: 'true',
    },
})
