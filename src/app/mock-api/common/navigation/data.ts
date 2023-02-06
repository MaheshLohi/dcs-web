/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [

            {
                id   : 'connect',
                title: 'Connect',
                type : 'basic',
                icon : 'heroicons_outline:home',
                link : '/student/connect'
            },
            {
                id   : 'dashboard',
                title: 'Dashboard',
                type : 'basic',
                icon : 'heroicons_outline:cube',
                link : '/student/dashboard'
            },
            {
                id   : 'assignment',
                title: 'Assignment',
                type : 'basic',
                icon : 'mat_solid:layers',
                link : '/student/assignment'
            },
            {
                id   : 'test',
                title: 'Test',
                type : 'basic',
                icon : 'heroicons_outline:library',
                link : '/student/test'
            },
            {
                id   : 'schedule',
                title: 'Schedule',
                type : 'basic',
                icon : 'heroicons_outline:adjustments',
                link : '/student/schedule'
            },
            {
            id      : 'preferences',
            title   : 'Preferences',
            type    : 'group',
            children: [
                {
                    id   : 'support',
                    title: 'Support',
                    type : 'basic',
                    icon : 'heroicons_outline:question-mark-circle',
                    link : '/student/support'
                },
                {
                    id   : 'settings',
                    title: 'Settings',
                    type : 'basic',
                    icon : 'heroicons_outline:cog',
                    link : '/student/settings'
                },
                {
                    id   : 'privacy-policy',
                    title: 'Privacy Policy',
                    type : 'basic',
                    icon : 'heroicons_outline:document-text',
                    link : '/student/privacy-policy'
                }
            ]
        } 

];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
