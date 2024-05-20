class LedgerEntry {
  constructor() {
    this.date = undefined;
    this.description = undefined;
    this.change = undefined;
  }
}

export function createEntry(date, description, change) {
  let entry = new LedgerEntry();
  entry.date = new Date(date);
  entry.description = description;
  entry.change = change;
  return entry;
}

export function formatEntries(currency, locale, entries) {
  let table = '';
  const l10n = {
    date: ['Date', 'Datum'],
    desc: ['Description', 'Omschrijving'],
    change: ['Change', 'Verandering']
  }
  const useLocale = locale === 'en-US' ? 0 : 1

  const getDateStr = (entry) => {
    const day = entry.date.getDate().toString().padStart(2, '0')
    const month = (entry.date.getMonth() + 1).toString().padStart(2, '0')
    const year = entry.date.getFullYear()
    if (locale === 'en-US') {
      return `${month}/${day}/${year}`
    } 
    return `${day}-${month}-${year}`
  }

  // Generate Header Row
  table += [
    l10n.date[useLocale].padEnd(10, ' '),
    l10n.desc[useLocale].padEnd(25, ' '),
    l10n.change[useLocale].padEnd(13, ' ')
  ].join(' | ') + '\n';

  // Sort entries
  entries.sort(
    (a, b) =>
      a.date - b.date ||
      a.change - b.change ||
      a.description.localeCompare(b.description),
  );

  entries.forEach((entry) => {
    // Write entry date to table
    table += `${getDateStr(entry)} | `;

    // Write entry description to table
    const truncatedDescription =
      entry.description.length > 25
        ? `${entry.description.substring(0, 22)}...`
        : entry.description.padEnd(25, ' ');
    table += `${truncatedDescription} | `;

    // Write entry change to table
    let changeStr = '';
    const formatingOptions = {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
    if (locale === 'nl-NL') {
      formatingOptions.currencyDisplay = 'narrowSymbol'
    }
    let change = entry.change / 100
    if (locale === 'en-US') {
      change = Math.abs(change)
    }
    const str = change.toLocaleString(
      locale,
      formatingOptions,
    )
    if (locale === 'en-US' && entry.change < 0) {
      changeStr = `(${str})`;
    } else {
      changeStr = `${str} `;
    }

    table += changeStr.padStart(13, ' ');
    table += '\n';
  });

  return table.replace(/\n$/, '');
}
