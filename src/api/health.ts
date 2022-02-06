import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';

function handler(_request: GatsbyFunctionRequest, response: GatsbyFunctionResponse): void {
  try {
    response.json({
      uptime: process.uptime(),
    });
  } catch (error) {
    response.send(503);
  }
}

export default handler;
