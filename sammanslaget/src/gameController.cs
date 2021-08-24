using UnityEngine;

public class GameController : MonoBehaviour {
  private void Start () {
#if (UNITY_WEBGL == true && UNITY_EDITOR == false)
    WebGLInput.captureAllKeyboardInput = false;
#endif
  }
}