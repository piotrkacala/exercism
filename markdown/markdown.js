const wrap = (text, tag) => `<${tag}>${text}</${tag}>`

function parser(markdown, delimiter, tag) {
  const pattern = new RegExp(`${delimiter}(.+)${delimiter}`);
  const replacement = `<${tag}>$1</${tag}>`;
  return markdown.replace(pattern, replacement);
}

const parse__ = (markdown) => parser(markdown, '__', 'strong')
const parse_ = (markdown) => parser(markdown, '_', 'em')

function parseText(markdown, list) {
  const parsedText = parse_(parse__(markdown));
  if (list) {
    return parsedText;
  } else {
    return wrap(parsedText, 'p');
  }
}

function parseHeader(markdown, list) {
  const count = markdown.match(/^#+/gm)?.[0]?.length
  if (count === undefined || count > 6) {
    return [null, list];
  }
  const headerTag = `h${count}`;
  const headerHtml = wrap(markdown.substring(count + 1), headerTag);
  if (list) {
    return [`</ul>${headerHtml}`, false];
  } else {
    return [headerHtml, false];
  }
}

function parseLineItem(markdown, list) {
  if (!markdown.startsWith('*')) {
    return [null, list];
  }
  const innerHtml = wrap(parseText(markdown.substring(2), true), 'li');
  if (list) {
    return [innerHtml, true];
  } else {
    return [`<ul>${innerHtml}`, true];
  }
}

function parseParagraph(markdown, list) {
  if (!list) {
    return [parseText(markdown, false), false];
  } else {
    return [`</ul>${parseText(markdown, false)}`, false];
  }
}

function parseLine(markdown, list) {
  let [result, inListAfter] = parseHeader(markdown, list);
  if (result === null) {
    [result, inListAfter] = parseLineItem(markdown, list);
  }
  if (result === null) {
    [result, inListAfter] = parseParagraph(markdown, list);

  }
  if (result === null) {
    throw new Error('Invalid markdown');
  }
  return [result, inListAfter];
}

export function parse(markdown) {
  const [result, list] = markdown
    .split('\n')
    .reduce((acc, cur) => {
      const [lineResult, newList] = parseLine(cur, acc[1]);
      return [acc[0] + lineResult, newList]
    }, ['', false])

  return result + (list ? '</ul>' : '')
}
