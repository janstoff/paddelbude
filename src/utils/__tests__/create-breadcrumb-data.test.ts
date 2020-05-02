import {createBreadcrumbData} from '../create-breadcrumb-data';

describe('createBreadcrumbData', () => {
  it('returns breadCrumb with link to including locale for non-default locale', () => {
    const path = '/en/technique/paddling/strokes';
    const locale = 'en';

    expect(createBreadcrumbData(path, locale)).toStrictEqual([
      {label: 'technique', linkTo: '/technique'},
      {label: 'paddling', linkTo: '/technique/paddling'},
    ]);
  });

  it('returns breadCrumb with link to excluding locale for default locale', () => {
    const path = '/technique/paddling/strokes';
    const locale = 'de';

    expect(createBreadcrumbData(path, locale)).toStrictEqual([
      {label: 'technique', linkTo: '/technique'},
      {label: 'paddling', linkTo: '/technique/paddling'},
    ]);
  });
});
