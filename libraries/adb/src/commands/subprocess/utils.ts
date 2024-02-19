/**
 * Escapes single quotes in the input string.
 */
export function escapeArg(input: string) {
    // For example, a'b becomes 'a'\''b'.
    //
    // It's the concatenation of:
    //
    // * 'a' (a single-quoted string containing a character A)
    // * \' (an escaped single quote character)
    // * 'b' (a single-quoted string containing a character B)
    let result = "";
    result += `'`;

    let start = 0;
    while (true) {
        const index = input.indexOf(`'`, start);
        if (index === -1) {
            result += input.substring(start);
            break;
        }
        result += input.substring(start, index);
        result += String.raw`'\''`;
        start = index + 1;
    }

    result += `'`;
    return result;
}
