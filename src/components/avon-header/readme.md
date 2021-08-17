# avon-header



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type     | Default |
| --------- | --------- | ----------- | -------- | ------- |
| `country` | `country` |             | `string` | `'ZA'`  |
| `locale`  | `locale`  |             | `string` | `'en'`  |


## Dependencies

### Depends on

- [avon-topbar](../avon-topbar)
- [mobile-menu](../mobile-menu)
- [desktop-menu](../desktop-menu)

### Graph
```mermaid
graph TD;
  avon-header --> avon-topbar
  avon-header --> mobile-menu
  avon-header --> desktop-menu
  avon-topbar --> avon-link
  mobile-menu --> avon-link
  mobile-menu --> search-bar
  desktop-menu --> search-bar
  desktop-menu --> avon-link
  desktop-menu --> category-nav
  category-nav --> avon-link
  style avon-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
