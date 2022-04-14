function towersOfHanoi(source, destination, buffer, n) {
    
    if (n <= 0) return;

    towersOfHanoi(source, buffer, destination, n - 1);
    console.log(`move disk ${n} from ${source} to ${destination}`);
    towersOfHanoi(buffer, destination, source, n - 1);
}

towersOfHanoi('source', 'destination', 'buffer', 3);