import { createElement } from 'react';
import { docs } from 'fumadocs-mdx:collections/server';
import { loader } from 'fumadocs-core/source';

/**
 * Resolve icon string from meta.json to Google Material Icons.
 * Use ---[icon_name]Section Title--- in meta.json for category titles.
 * See https://fonts.google.com/icons
 */
function materialIconResolver(iconName: string | undefined) {
  if (!iconName || typeof iconName !== 'string') return undefined;
  return createElement('span', {
    key: 'icon',
    className: 'material-icons',
    style: { fontSize: '1rem', width: '1rem', height: '1rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' },
    'aria-hidden': true,
  }, iconName.trim());
}

export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  icon: materialIconResolver,
});
