// ** Mock Adapter
import mock from 'src/@fake-db/mock'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation: VerticalNavItemsType = [
  {
    title: 'Dashboards',
    icon: 'HomeOutline',
    badgeContent: 'new',
    badgeColor: 'error',
    children: [
      {
        title: 'CRM',
        path: '/dashboards/crm'
      },
      {
        title: 'Analytics',
        path: '/dashboards/analytics'
      },
      {
        title: 'eCommerce',
        path: '/dashboards/ecommerce'
      }
    ]
  },
  {
    sectionTitle: 'Apps & Pages'
  },
  {
    title: 'Email',
    icon: 'EmailOutline',
    path: '/apps/email'
  },
  {
    title: 'Chat',
    icon: 'MessageOutline',
    path: '/apps/chat'
  },
  {
    title: 'Calendar',
    icon: 'CalendarBlankOutline',
    path: '/apps/calendar'
  },
  {
    title: 'Invoice',
    icon: 'FileDocumentOutline',
    children: [
      {
        title: 'List',
        path: '/apps/invoice/list'
      },
      {
        title: 'Preview',
        path: '/apps/invoice/preview'
      },
      {
        title: 'Edit',
        path: '/apps/invoice/edit'
      },
      {
        title: 'Add',
        path: '/apps/invoice/add'
      }
    ]
  },
  {
    title: 'User',
    icon: 'AccountOutline',
    children: [
      {
        title: 'List',
        path: '/apps/user/list'
      },
      {
        title: 'View',
        path: '/apps/user/view'
      }
    ]
  },
  {
    title: 'Roles & Permissions',
    icon: 'LockOutline',
    children: [
      {
        title: 'Roles',
        path: '/apps/roles'
      },
      {
        title: 'Permissions',
        path: '/apps/permissions'
      }
    ]
  },
  {
    title: 'Pages',
    icon: 'FileDocumentOutline',
    children: [
      {
        title: 'Authentication',
        children: [
          {
            title: 'Login',
            children: [
              {
                openInNewTab: true,
                title: 'Login v1',
                path: '/pages/auth/login-v1'
              },
              {
                openInNewTab: true,
                title: 'Login v2',
                path: '/pages/auth/login-v2'
              },
              {
                openInNewTab: true,
                title: 'Login With AppBar',
                path: '/pages/auth/login-with-appbar'
              }
            ]
          },
          {
            title: 'Register',
            children: [
              {
                openInNewTab: true,
                title: 'Register v1',
                path: '/pages/auth/register-v1'
              },
              {
                openInNewTab: true,
                title: 'Register v2',
                path: '/pages/auth/register-v2'
              }
            ]
          },
          {
            title: 'Forgot Password',
            children: [
              {
                openInNewTab: true,
                title: 'Forgot Password v1',
                path: '/pages/auth/forgot-password-v1'
              },
              {
                openInNewTab: true,
                title: 'Forgot Password v2',
                path: '/pages/auth/forgot-password-v2'
              }
            ]
          },
          {
            title: 'Reset Password',
            children: [
              {
                openInNewTab: true,
                title: 'Reset Password v1',
                path: '/pages/auth/reset-password-v1'
              },
              {
                openInNewTab: true,
                title: 'Reset Password v2',
                path: '/pages/auth/reset-password-v2'
              }
            ]
          }
        ]
      },
      {
        title: 'Account Settings',
        path: '/pages/account-settings'
      },
      {
        title: 'Pricing',
        path: '/pages/pricing'
      },
      {
        title: 'FAQ',
        path: '/pages/faq'
      },
      {
        title: 'Knowledge Base',
        path: '/pages/knowledge-base'
      },
      {
        title: 'Miscellaneous',
        children: [
          {
            openInNewTab: true,
            title: 'Coming Soon',
            path: '/pages/misc/coming-soon'
          },
          {
            openInNewTab: true,
            title: 'Under Maintenance',
            path: '/pages/misc/under-maintenance'
          },
          {
            openInNewTab: true,
            title: 'Page Not Found - 404',
            path: '/pages/misc/404-not-found'
          },
          {
            openInNewTab: true,
            title: 'Not Authorized - 401',
            path: '/pages/misc/401-not-authorized'
          },
          {
            openInNewTab: true,
            title: 'Server Error - 500',
            path: '/pages/misc/500-server-error'
          }
        ]
      }
    ]
  },
  {
    title: 'Charts',
    icon: 'ChartDonut',
    children: [
      {
        title: 'Apex',
        path: '/charts/apex-charts'
      },
      {
        title: 'Recharts',
        path: '/charts/recharts'
      },
      {
        title: 'ChartJS',
        path: '/charts/chartjs'
      }
    ]
  },
  {
    path: '/acl',
    action: 'read',
    subject: 'acl-page',
    icon: 'ShieldOutline',
    title: 'Access Control'
  },
  {
    title: 'Others',
    icon: 'DotsHorizontal',
    children: [
      {
        title: 'Menu Levels',
        children: [
          {
            title: 'Menu Level 2.1'
          },
          {
            title: 'Menu Level 2.2',
            children: [
              {
                title: 'Menu Level 3.1'
              },
              {
                title: 'Menu Level 3.2'
              }
            ]
          }
        ]
      },
      {
        title: 'Disabled Menu',
        disabled: true
      },
      {
        title: 'Raise Support',
        externalLink: true,
        openInNewTab: true,
        path: 'https://pixinvent.ticksy.com/'
      },
      {
        title: 'Documentation',
        externalLink: true,
        openInNewTab: true,
        path: 'https://pixinvent.com/demo/materialize-mui-react-nextjs-admin-template/documentation'
      }
    ]
  }
]

mock.onGet('/api/vertical-nav/data').reply(() => {
  return [200, navigation]
})
