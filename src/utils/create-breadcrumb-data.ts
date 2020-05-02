function getParentPath(crumb: string, path: string, locale: string): string {
  const pathStringArray = path
    .split('/')
    .filter((element) => element !== locale);
  const crumbIndex = pathStringArray.indexOf(crumb);

  return pathStringArray.slice(0, crumbIndex + 1).join('/');
}

export interface BreadCrumb {
  readonly label: string;
  readonly linkTo: string;
}

export type BreadCrumbData = BreadCrumb[];

export function createBreadcrumbData(path: string, locale: string) {
  const breadCrumbs = path
    .split('/')
    .filter((element) => element !== '' && element !== locale)
    .slice(0, -1);

  const breadCrumbData = breadCrumbs.map((crumb) => ({
    label: crumb,
    linkTo: getParentPath(crumb, path, locale),
  }));

  return breadCrumbData;
}
