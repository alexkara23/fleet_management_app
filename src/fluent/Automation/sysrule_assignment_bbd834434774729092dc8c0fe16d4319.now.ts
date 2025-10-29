import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['bbd834434774729092dc8c0fe16d4319'],
    table: 'sysrule_assignment',
    data: {
        active: 'true',
        condition: 'task_type=2^EQ',
        group: 'd905b8cb4734729092dc8c0fe16d43e2',
        match_conditions: 'ALL',
        name: 'Fleet Management Task - Maintenance',
        order: '100',
        script: `/**&#13;
* Example:&#13;
* The following script requires personalizing the instance to add the Malware category and the Security assignment group.&#13;
* if (current.category == "Hardware")&#13;
*    current.assignment_group.setDisplayValue("Hardware"); &#13;
* else if (current.category == "Software")&#13;
*    current.assignment_group.setDisplayValue("Software");&#13;
* else if (current.category == "Malware")&#13;
*    current.assignment_group.setDisplayValue("Security");	&#13;
*&#13;
* Another Example:&#13;
* Release Planning Example, which assigns the last person assigned to a release to the current release.&#13;
* current.release.product.service.assigned_to;&#13;
*/`,
        sys_domain: 'global',
        sys_domain_path: '/',
        table: 'x_snc_fleet_manage_fleet_management_task',
    },
})
