import 'https://main--franklin-library-host--dylandepass.hlx.live/tools/sidekick/library/index.js';
import { readBlockConfig } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  const blockConfig = readBlockConfig(block);
  const library = document.createElement('sidekick-library');
  library.config = {};

  Object.keys(blockConfig).forEach((attr) => {
    library.config[attr] = blockConfig[attr];
  })

  block.replaceChildren(library);
}