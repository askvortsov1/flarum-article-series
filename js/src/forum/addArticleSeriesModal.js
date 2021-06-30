import { extend } from 'flarum/common/extend';
import Button from 'flarum/common/components/Button';
import DiscussionControls from 'flarum/forum/utils/DiscussionControls';

import ArticleSeriesModal from './components/ArticleSeriesModal';

export default function addArticleSeriesModal() {
  extend(DiscussionControls, 'userControls', function (items, discussion) {
    items.add(
      'article-series-settings',
      <Button
        icon="fas fa-book"
        onclick={() =>
          app.modal.show(ArticleSeriesModal, {
            discussion,
          })
        }
      >
        {app.translator.trans('askvortsov-article-series.forum.discussion_controls.article_series_button')}
      </Button>
    );
  });
}
