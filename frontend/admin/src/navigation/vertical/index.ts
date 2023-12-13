import AccountOutline from 'mdi-material-ui/AccountOutline'
import CalendarBlankOutline from 'mdi-material-ui/CalendarBlankOutline'
import ChartDonut from 'mdi-material-ui/ChartDonut'
import FileDocumentOutline from 'mdi-material-ui/FileDocumentOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import LockOutline from 'mdi-material-ui/LockOutline'
import VectorArrangeBelow from 'mdi-material-ui/VectorArrangeBelow'

import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboards',
      icon: HomeOutline,
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
        }
      ]
    },
    {
      sectionTitle: 'Apps & Pages Control'
    },
    {
      title: 'Calendar',
      icon: CalendarBlankOutline,
      path: '/apps/calendar'
    },
    {
      title: 'User',
      icon: AccountOutline,
      children: [
        {
          title: 'List',
          path: '/apps/user/list'
        },
      ]
    },
    {
      title: 'Roles & Permissions',
      icon: LockOutline,
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
      icon: FileDocumentOutline,
      children: [
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
      icon: VectorArrangeBelow,
      title: 'Dialog Examples',
      path: '/pages/dialog-examples'
    },
    {
      sectionTitle: 'User Interface'
    },
    {
      title: 'Typography',
      icon: FormatLetterCase,
      path: '/ui/typography'
    },
    {
      sectionTitle: 'Charts & Misc'
    },
    {
      title: 'Charts',
      icon: ChartDonut,
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
    }
  ]
}

export default navigation
