attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;

uniform sampler2D altimetria;
uniform sampler2D texture;
uniform sampler2D heightmap;

void main() {

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition.xy, aVertexPosition.z + texture2D(heightmap,aTextureCoord).r/4.0, 1.0); 

	vTextureCoord = aTextureCoord;
}

