import { redGhost } from '../src/Ghosts';

describe('redGhost ', () => {
    it('moves to the Pacman position', () => {
        const initialPosition = [3, 4];
        const pacmanPosition = [0, 0];
        const finalPosition = redGhost(pacmanPosition, initialPosition);

        expect(finalPosition).toEqual(pacmanPosition);
    });

    it('moves to the Pacman position when pacman is at origin', () => {
        const initialPosition = [3, 4];
        const pacmanPosition = [0, 0];
        const finalPosition = redGhost(pacmanPosition, initialPosition);

        expect(finalPosition).toEqual(pacmanPosition);
    });

    it('moves to the Pacman position when pacman and ghost are on the same x-axis', () => {
        const initialPosition = [3, 4];
        const pacmanPosition = [3, 0];
        const finalPosition = redGhost(pacmanPosition, initialPosition);

        expect(finalPosition).toEqual(pacmanPosition);
    });

    it('moves to the Pacman position when pacman and ghost are on the same y-axis', () => {
        const initialPosition = [3, 4];
        const pacmanPosition = [0, 4];
        const finalPosition = redGhost(pacmanPosition, initialPosition);

        expect(finalPosition).toEqual(pacmanPosition);
    });

    it('does not move if it is already at the Pacman position', () => {
        const initialPosition = [2, 2];
        const pacmanPosition = [2, 2];
        const finalPosition = redGhost(pacmanPosition, initialPosition);

        expect(finalPosition).toEqual(initialPosition);
    });

    it('moves to the Pacman position when both are in different quadrants', () => {
        const initialPosition = [-3, -4];
        const pacmanPosition = [2, 2];
        const finalPosition = redGhost(pacmanPosition, initialPosition);

        expect(finalPosition).toEqual(pacmanPosition);
    });

    it('handles negative positions', () => {
        const initialPosition = [-3, -4];
        const pacmanPosition = [-1, -2];
        const finalPosition = redGhost(pacmanPosition, initialPosition);

        expect(finalPosition).toEqual(pacmanPosition);
    });
});
