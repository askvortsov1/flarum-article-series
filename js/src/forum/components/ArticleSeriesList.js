import Component from "flarum/common/Component";
import Link from "flarum/components/Link";

export default class ArticleSeriesList extends Component {
  view() {
    if (this.attrs.discussion === null) return '';
    
    const articleSeries = this.attrs.discussion.articleSeries();

    if (articleSeries === null) return '';

    const articles = articleSeries.articles();
    console.log(articleSeries)

    return (
      <div className="BlogArticleList BlogSideWidget">
        <h3>
          {app.translator.trans("askvortsov-article-series.forum.article_list.title", { series: <Link href={app.route('blogCategory', {slug: articleSeries.slug()})}>{articleSeries.name()}</Link>})}
        </h3>

        {articles &&
          articles.sort((a1, a2) => a1.articleSeriesOrder() - a2.articleSeriesOrder()).map(this.articleItem)}
      </div>
    );
  }

  articleItem(article, i) {
    console.log(m.route.param('id'), article.slug())
    return (
      <Link
        href={app.route('blogArticle', {id: article.slug()})}
        className={`BlogSideWidget-item BlogSideWidget-item-${article.id()}`}
      >
        {i + 1}. {m.route.param('id') === article.slug() ? <strong>{article.title()}</strong> : article.title()}
      </Link>
    );
  }
}
