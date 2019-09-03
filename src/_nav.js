export default {
  
  items: [
    {
      name: 'Inbound / Outbound',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      name: 'Claims Management',
      children: [
        {
          name: 'Claim Inquiry',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Claim Adjustment',
          url: '/base/cards',
          icon: 'icon-puzzle',
        },
      ]
    },
    {
      name: 'Edit / Resubmit Claim',
      url: '/theme/colors',
      icon: 'icon-drop',
    },
    {
      name: 'Transaction Management',
      url: '/theme/typography',
      icon: 'icon-pencil',
      children: [
        {
          name: 'Validation',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle',
        }
      ]
    },
    {
      name: 'Trading Partner Management',
      children: [
        {
          name: 'Edit Profiles',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle',
        },
        {
          name: 'TP Agreements',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Companion Guide',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Manage Rule Sets',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle',
        }
      ]
    },
    {
      name: 'Enrollment Management',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Breadcrumbs',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Cards',
          url: '/base/cards',
          icon: 'icon-puzzle',
        },
        {
          name: 'Carousels',
          url: '/base/carousels',
          icon: 'icon-puzzle',
        },
        {
          name: 'Collapses',
          url: '/base/collapses',
          icon: 'icon-puzzle',
        },
        {
          name: 'Dropdowns',
          url: '/base/dropdowns',
          icon: 'icon-puzzle',
        },
        {
          name: 'Forms',
          url: '/base/forms',
          icon: 'icon-puzzle',
        },
        {
          name: 'Jumbotrons',
          url: '/base/jumbotrons',
          icon: 'icon-puzzle',
        },
        {
          name: 'List groups',
          url: '/base/list-groups',
          icon: 'icon-puzzle',
        },
        {
          name: 'Navs',
          url: '/base/navs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Paginations',
          url: '/base/paginations',
          icon: 'icon-puzzle',
        },
        {
          name: 'Popovers',
          url: '/base/popovers',
          icon: 'icon-puzzle',
        },
        {
          name: 'Progress Bar',
          url: '/base/progress-bar',
          icon: 'icon-puzzle',
        },
        {
          name: 'Switches',
          url: '/base/switches',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tables',
          url: '/base/tables',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tabs',
          url: '/base/tabs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tooltips',
          url: '/base/tooltips',
          icon: 'icon-puzzle',
        },
      ],
    },
    {
      name: 'Process Management',
      url: '/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Buttons',
          url: '/buttons/buttons',
          icon: 'icon-cursor',
        },
        {
          name: 'Button dropdowns',
          url: '/buttons/button-dropdowns',
          icon: 'icon-cursor',
        },
        {
          name: 'Button groups',
          url: '/buttons/button-groups',
          icon: 'icon-cursor',
        },
        {
          name: 'Brand Buttons',
          url: '/buttons/brand-buttons',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      name: 'Report Generation',
      url: '/charts',
      icon: 'icon-pie-chart',
    },
    {
      name: 'Acknowledgement Generation',
      url: '/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'CoreUI Icons',
          url: '/icons/coreui-icons',
          icon: 'icon-star',
          badge: {
            variant: 'info',
            text: 'NEW',
          },
        },
        {
          name: 'Flags',
          url: '/icons/flags',
          icon: 'icon-star',
        },
        {
          name: 'Font Awesome',
          url: '/icons/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7',
          },
        },
        {
          name: 'Simple Line Icons',
          url: '/icons/simple-line-icons',
          icon: 'icon-star',
        },
      ],
    }
  ],
};