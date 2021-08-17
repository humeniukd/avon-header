# desktop-menu



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type  | Default |
| ---------- | ---------- | ----------- | ----- | ------- |
| `data`     | `data`     |             | `any` | `null`  |
| `settings` | `settings` |             | `any` | `null`  |


## Dependencies

### Used by

 - [avon-header](../avon-header)

### Depends on

- [search-bar](../search-bar)
- avon-link
- [category-nav](../category-nav)

### Graph
```mermaid
graph TD;
  desktop-menu --> search-bar
  desktop-menu --> avon-link
  desktop-menu --> category-nav
  category-nav --> avon-link
  avon-header --> desktop-menu
  style desktop-menu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
