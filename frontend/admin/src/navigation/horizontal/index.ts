import AccountOutline from 'mdi-material-ui/AccountOutline'
import Apps from 'mdi-material-ui/Apps'
import CalendarBlankOutline from 'mdi-material-ui/CalendarBlankOutline'
import ChartBellCurve from 'mdi-material-ui/ChartBellCurve'
import ChartBellCurveCumulative from 'mdi-material-ui/ChartBellCurveCumulative'
import ChartDonut from 'mdi-material-ui/ChartDonut'
import ChartLine from 'mdi-material-ui/ChartLine'
import ChartTimelineVariant from 'mdi-material-ui/ChartTimelineVariant'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import LockOutline from 'mdi-material-ui/LockOutline'
import PaletteSwatchOutline from 'mdi-material-ui/PaletteSwatchOutline'

// ** Type import
import { HorizontalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): HorizontalNavItemsType => {
  return [
    {
      icon: HomeOutline,
      title: 'Dashboards',
      children: [
        {
          icon: ChartDonut,
          title: 'CRM',
          path: '/dashboards/crm'
        },
        {
          icon: ChartTimelineVariant,
          title: 'Analytics',
          path: '/dashboards/analytics'
        }
      ]
    },
    {
      icon: Apps,
      title: 'Apps',
      children: [
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
            }
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
        }
      ]
    },
    {
      icon: PaletteSwatchOutline,
      title: 'UI',
      children: [
        {
          title: 'Typography',
          icon: FormatLetterCase,
          path: '/ui/typography'
        }
      ]
    },
    {
      title: 'Charts',
      icon: ChartDonut,
      children: [
        {
          title: 'Apex',
          icon: ChartLine,
          path: '/charts/apex-charts'
        },
        {
          title: 'Recharts',
          icon: ChartBellCurve,
          path: '/charts/recharts'
        },
        {
          title: 'ChartJS',
          path: '/charts/chartjs',
          icon: ChartBellCurveCumulative
        }
      ]
    }
  ]
}

export default navigation
