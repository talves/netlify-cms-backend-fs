import FileSystemBackendClass from './src/implementation';

/**
 * Add extension hooks to global scope.
 */
if (typeof window !== 'undefined') {
  window.FileSystemBackendClass = FileSystemBackendClass;
}

export default FileSystemBackendClass;