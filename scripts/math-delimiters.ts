/** Accept MathJax delimiters as well as dollars without rewriting code or existing math. */
export function normalizeMathDelimiters(source: string): string {
  const convert = (text: string) => text.replace(
    /(`+)[\s\S]*?\1|\$\$[\s\S]*?\$\$|\$[^\n$]*?\$|\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]/g,
    (match, code, inline, display) => {
      if (code || (inline === undefined && display === undefined)) return match
      if (inline !== undefined) return `$${inline}$`
      return `\n\n$$\n${display.trim()}\n$$\n\n`
    },
  )
  const output: string[] = []
  let prose = ''
  let fence: { marker: string; length: number } | null = null
  for (const line of source.split(/(?<=\n)/)) {
    const marker = line.match(/^ {0,3}(`{3,}|~{3,})/)
    if (fence) {
      output.push(line)
      if (marker && marker[1][0] === fence.marker && marker[1].length >= fence.length) fence = null
    } else if (marker) {
      output.push(convert(prose), line)
      prose = ''
      fence = { marker: marker[1][0], length: marker[1].length }
    } else prose += line
  }
  output.push(convert(prose))
  return output.join('')
}
