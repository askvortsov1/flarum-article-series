import registerModels from '../common/registerModels';
import addIsArticleSeriesToEditTagModal from './addIsArticleSeriesToEditTagModal';

app.initializers.add('askvortsov/flarum-article-series', () => {
  registerModels();
  addIsArticleSeriesToEditTagModal();
});
