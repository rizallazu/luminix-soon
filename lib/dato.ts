import { GraphQLClient } from 'graphql-request';

interface DatoCMSRequestProps {
  query: string;
  variables?: any;
  includeDrafts?: boolean;
  excludeInvalid?: boolean;
}

export function request(
  {
    query,
    variables,
    includeDrafts = false,
    excludeInvalid = false
  }: DatoCMSRequestProps,
  publicMode = false
) {
  const headers: { [key: string]: string } = {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_FULL_ACCESS_API_TOKEN}`
  };

  if (includeDrafts) {
    headers['X-Include-Drafts'] = 'true';
  }

  if (excludeInvalid) {
    headers['X-Exclude-Invalid'] = 'true';
  }
  const client = new GraphQLClient('https://graphql.datocms.com', { headers });
  return client.request(query, variables) as any;
}
