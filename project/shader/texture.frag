#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;


uniform sampler2D altimetria;
uniform sampler2D texture;
uniform sampler2D heightmap;

void main() {
	vec4 height = 30.0 * texture2D(altimetria, vec2(0,texture2D(heightmap,vTextureCoord).x)) / 100.0;
    vec4 color = 70.0 * texture2D(texture,vTextureCoord) / 100.0;

	gl_FragColor = height + color;

}