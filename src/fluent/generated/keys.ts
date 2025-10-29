import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'bfd5b6c59dcb4f2789a825c85a0e17d9'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'aaf55d590e724a3c98b77330f9133d67'
                    }
                }
                composite: [
                    {
                        table: 'sys_choice'
                        id: '1663bff2c0804290a6798dcf03eac107'
                        key: {
                            name: 'x_snc_fleet_manage_fleet_management_task'
                            element: 'task_type'
                            value: '3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4686a62c732245f58bff674072f2c74b'
                        key: {
                            name: 'x_snc_fleet_manage_fleet_management_task'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '46f1600347f0729092dc8c0fe16d4384'
                        key: {
                            name: 'x_snc_fleet_manage_fleet_management_task'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '71f1600347f0729092dc8c0fe16d4320'
                        key: {
                            sys_security_acl: '71f1600347f0729092dc8c0fe16d430e'
                            sys_user_role: {
                                id: 'b5f1eccf47b0729092dc8c0fe16d43eb'
                                key: {
                                    name: 'x_snc_fleet_manage.fleet_management_task_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '74ec95aeee9e4c48bd2be4a2c041014d'
                        key: {
                            name: 'x_snc_fleet_manage_fleet_management_task'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '82f1600347f0729092dc8c0fe16d4351'
                        key: {
                            sys_security_acl: '31f1600347f0729092dc8c0fe16d4341'
                            sys_user_role: {
                                id: 'b5f1eccf47b0729092dc8c0fe16d43eb'
                                key: {
                                    name: 'x_snc_fleet_manage.fleet_management_task_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9895b700bfe34b0886b97898f2f2da16'
                        key: {
                            name: 'x_snc_fleet_manage_fleet_management_task'
                            element: 'task_type'
                            value: '1'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b1f1600347f0729092dc8c0fe16d4329'
                        key: {
                            sys_security_acl: 'f5f1600347f0729092dc8c0fe16d4325'
                            sys_user_role: {
                                id: 'b5f1eccf47b0729092dc8c0fe16d43eb'
                                key: {
                                    name: 'x_snc_fleet_manage.fleet_management_task_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b1f1600347f0729092dc8c0fe16d433d'
                        key: {
                            sys_security_acl: 'f5f1600347f0729092dc8c0fe16d4339'
                            sys_user_role: {
                                id: 'b5f1eccf47b0729092dc8c0fe16d43eb'
                                key: {
                                    name: 'x_snc_fleet_manage.fleet_management_task_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b4b4e40747f0729092dc8c0fe16d4323'
                        key: {
                            name: 'x_snc_fleet_manage_fleet_management_task'
                            element: 'cmdb_ci'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'b5f1eccf47b0729092dc8c0fe16d43eb'
                        key: {
                            name: 'x_snc_fleet_manage.fleet_management_task_user'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'b702240347f0729092dc8c0fe16d43a5'
                        key: {
                            category: 'x_snc_fleet_manage_fleet_management_task'
                            prefix: 'FLT'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b7984064b69a435bae10c57744c7924a'
                        key: {
                            name: 'x_snc_fleet_manage_fleet_management_task'
                            element: 'task_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c20ce2d3275f4650bfd20e4664477f37'
                        key: {
                            name: 'x_snc_fleet_manage_fleet_management_task'
                            element: 'task_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd27efefd17cc472cb4ed8fffc0886750'
                        key: {
                            name: 'x_snc_fleet_manage_fleet_management_task'
                            element: 'task_type'
                            value: '2'
                        }
                    },
                ]
            }
        }
    }
}
