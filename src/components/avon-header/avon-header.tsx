import {Component, h, State} from '@stencil/core';
import categories from './mock'
import 'avon-mfe-ui-kit';

async function getCategories() {
  return Promise.resolve(categories)
}

async function getCategoryNavTree() {
  const categoryResponse = await getCategories();
  const res = (categoryResponse.data.rest &&
    (categoryResponse.data.rest.results.length > 0)
  ) ? [
      ...categoryResponse.data.categories.results,
      {
        'name': 'More',
        'children': [...categoryResponse.data.rest.results]
      }
    ] :
    [
      ...categoryResponse.data.categories.results,
    ];
  return res.map((category) => {
    if (category.slug) {
      return {
        ...category,
        isCategory:
          category.custom?.customFieldsRaw[0].value == "Category",
        children: category.children.filter((subCategory) => {
          return (
            subCategory.custom?.customFieldsRaw[0].value == "Category"
          );
        }),
      };
    } else return category;
  })
  .filter((category) => {
    return category.custom?.customFieldsRaw[0].value == "Category" || category?.name === "More";
  });
}

@Component({
  tag: 'avon-header',
  styleUrl: 'avon-header.scss',
  shadow: true,
})
export class AvonHeader {
  @State() categoryList = []

  async componentWillLoad() {
    this.categoryList = await getCategoryNavTree();
  }
  render() {
    return (
      <div>
        <div class="container">
          <avon-topbar></avon-topbar>
        </div>
        <div class="header-block">
          <desktop-menu data={this.categoryList}></desktop-menu>
        </div>
      </div>
    );
  }
}
