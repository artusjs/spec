import path from 'path';
export function resolveSourcePath(inputSourcePath, currentFilePath) {
    // source=src/... → resolve from workspace root
    // source=./src/... → resolve from current file
    // source=/src/... → check is already absolute path, if not, resolve from workspace root
    if (inputSourcePath.startsWith('/')) {
        return path.isAbsolute(inputSourcePath)
            ? inputSourcePath
            : path.resolve(inputSourcePath);
    }
    if (inputSourcePath.startsWith('.')) {
        return path.resolve(path.dirname(currentFilePath), inputSourcePath);
    }
    return path.resolve(inputSourcePath);
}
