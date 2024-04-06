export const Cube = () => {
    const skills = [
        'git',
        'docker',
        'html',
        'css',
        'bootstrap',
        'tailwind',
        'js',
        'ts',
        'node',
        'express',
        'nest',
        'handlebars',
        'pug',
        'react',
        'next',
        'vue',
        'php',
        'laravel',
        'livewire',
    ];

    return (
        <div className="cube">
            {
                skills.map((s) => <figure><img src={`/images/icons/${s}.webp`} alt="Skill Image" /></figure>)
            }
        </div>
    )
}
