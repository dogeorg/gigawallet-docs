'use client';

import type { FC } from 'react';
import type * as PageTree from 'fumadocs-core/page-tree';

export const SidebarSectionTitle: FC<{ item: PageTree.Separator }> = ({ item }) => {
  return (
    <p className="sidebar-section-title" data-non-clickable>
      {item.name}
    </p>
  );
};
