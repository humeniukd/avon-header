import {Component, h, Prop, State, Env} from '@stencil/core';
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

async function getMgnlSettings(config) {
  const res = await fetch(
    `${Env.settingsApi}${config?.endpoint}/avon-${config?.country}/setting?lang=${config?.lang}`
  )
  const content = await res.json()
  console.log('content', content)
  return content
}

@Component({
  tag: 'avon-header',
  styleUrl: 'avon-header.scss',
  shadow: true,
})
export class AvonHeader {
  @Prop() locale = 'en'
  @Prop() country = 'ZA'
  @State() categoryList = []
  @State() settings = {}

  async componentWillLoad() {
    this.categoryList = await getCategoryNavTree();
    this.settings = await getMgnlSettings({
      lang: this.locale,
      country: this.country,
      endpoint: "header",
    });
  }
  render() {
    return (
      <div>
        <div class="container desktop-only">
          <avon-topbar settings={this.settings}></avon-topbar>
        </div>
        <div class="header-block">
          <div class="smartphone-only">
            <mobile-menu categoryList={this.categoryList} settings={this.settings}></mobile-menu>
          </div>
          <div class="desktop-only">
            <desktop-menu data={this.categoryList} settings={this.settings}></desktop-menu>
          </div>
        </div>
      </div>
    );
  }
}
