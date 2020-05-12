import React, { Component } from 'react';
import { Icon } from 'react-fa';

export const ProjectMenu = [
    {
        key: 'nursery',
        name: '苗木管理',
        id: 'PROJECT.NURSERY',
        children: [

            {
                key: 'NurseryManagement',
                id: 'PROJECT.NURSERYMANAGEMENT',
                name: '苗圃管理',
                path: '/project/nurseryManagement'
            },
            {
                key: 'SupplierManagement',
                id: 'PROJECT.SUPPLIERMANAGEMENT',
                name: '供应商管理',
                path: '/project/supplierManagement'
            },
            {
                key: 'RelevanceManagement',
                id: 'PROJECT.RELEVANCEMANAGEMENT',
                name: '绑定管理',
                path: '/project/relevanceManagement'
            },
            {
                key: 'TreeManage',
                id: 'PROJECT.TREEMANAGE',
                name: '树种管理',
                path: '/project/treeManage'
            }
        ]
    },
    {
        key: 'ManMachine ',
        name: '人机物料',
        id: 'PROJECT.MANMACHINE.NONE',
        children: [
            {
                key: 'ManEntranceAndDeparture',
                id: 'PROJECT.MANENTRANCEANDDEPARTURE',
                name: '人员进离场',
                path: '/project/manentranceanddeparture'
            },
            {
                key: 'ManMachineGroup',
                id: 'PROJECT.MANMACHINEGROUP',
                name: '班组维护',
                path: '/project/manmachinegroup'
            },
            {
                key: 'MachineEntranceAndDeparture',
                id: 'PROJECT.MACHINEENTRANCEANDDEPARTURE',
                name: '机械进离场',
                path: '/project/machineentranceanddeparture'
            },
            {
                key: 'MachineQRCodePrint',
                id: 'PROJECT.MACHINEQRCODEPRINT',
                name: '机械二维码',
                path: '/project/machineqrcodeprint'
            },
            {
                key: 'FaceRecognitionList',
                id: 'PROJECT.FACERECOGNITIONLIST',
                name: '人脸识别列表',
                path: '/project/facerecognitionlist'
            },
            {
                key: 'FaceRecognitionRecord',
                id: 'PROJECT.FACERECOGNITIONRECORD',
                name: '人脸识别记录',
                path: '/project/facerecognitionrecord'
            }
        ]
    },
    {
        key: 'plotManage',
        name: '数据管理',
        id: 'PROJECT.PLOTMANAGE',
        children: [
            {
                key: 'ThinClassStorage',
                id: 'PROJECT.THINCLASSTORAGE',
                name: '细班导入',
                path: '/project/thinClassStorage'
            },
            {
                key: 'ThinClassParcelManage',
                id: 'PROJECT.THINCLASSPARCELMANAGE',
                name: '细班分块管理',
                path: '/project/thinClassParcelManage'
            },
            {
                key: 'ThinClassTreeTypeManage',
                id: 'PROJECT.THINCLASSTREETYPEMANAGE',
                name: '细班树种管理',
                path: '/project/thinClassTreeTypeManage'
            },
            {
                key: 'ParcelStorage',
                id: 'PROJECT.PARCELSTORAGE',
                name: '地块导入',
                path: '/project/parcelStorage'
            },
            {
                key: 'ParcelManage',
                id: 'PROJECT.PARCELMANAGE',
                name: '地块管理',
                path: '/project/parcelManage'
            },
            {
                key: 'QRCodeDistribute',
                id: 'PROJECT.QRCODEDISTRIBUTE',
                name: '二维码派发信息',
                path: '/project/qrcodedistribute'
            },
            {
                key: 'ConstructionPackage',
                id: 'PROJECT.CONSTRUCTIONPACKAGE',
                name: '施工包管理',
                path: '/project/constructionpackage'
            }
        ]
    }
    // {
    //     key: 'projectImage',
    //     name: '工程影像',
    //     id: 'PROJECT.PROJECTIMAGE',
    //     path: '/project/projectimage',
    // }
];

export const SetupMenu = [
    {
        key: 'Person',
        id: 'SETUP.PERSON',
        name: '用户管理',
        path: '/setup/person',
        icon: <Icon name='users' />
    },
    {
        key: 'Org',
        id: 'SETUP.ORG',
        name: '组织机构',
        path: '/setup/org',
        icon: <Icon name='street-view' />
    },
    {
        key: 'Role',
        id: 'SETUP.ROLE',
        name: '角色设置',
        path: '/setup/role',
        exact: true,
        icon: <Icon name='users' />
    },
    {
        key: 'Permission',
        id: 'SETUP.PERMISSION',
        name: '权限设置',
        path: '/setup/permission',
        icon: <Icon name='key' />
    },
    {
        key: 'Workflow',
        id: 'SETUP.WORKFLOW',
        name: '流程设置',
        path: '/setup/workflow',
        icon: <Icon name='object-group' />
    },
    {
        key: 'FlowNode',
        id: 'SETUP.FLOWNODE',
        name: '流程节点',
        path: '/setup/flownode',
        icon: <Icon name='object-group' />
    },
    {
        key: 'Blacklist',
        name: '黑名单',
        id: 'SETUP.BLACKLIST',
        icon: <Icon name='list-ul' />,
        children: [
            {
                key: 'PersonBlacklist',
                id: 'SETUP.PERSONBLACKLIST',
                name: '人员黑名单',
                path: '/setup/personblacklist',
                icon: <Icon name='street-view' />
            }
            // {
            //     key: 'NurseryBlacklist',
            //     id: 'SETUP.NURSERYBLACKLIST',
            //     name: '苗圃黑名单',
            //     path: '/setup/nurseryblacklist',
            //     icon: <Icon name='leaf' />
            // },
            // {
            //     key: 'SupplierBlacklist',
            //     id: 'SETUP.SUPPLIERBLACKLIST',
            //     name: '供应商黑名单',
            //     path: '/setup/supplierblacklist',
            //     icon: <Icon name='shopping-cart' />
            // }
        ]
    }
];